<script>
    import { onMount } from "svelte";

    let section;
    let dyno;
    let obstacles = [];
    let gravity = 0.8;
    let velocity = 0;
    let jumping = false;
    let gameStarted = false;
    let gameOver = false;
    let score = 0;
    let bestScore = 0;
    let obstacleInterval;
    let gameSpeed = 6;

    //center the dyno in the middle of the section at game start
    function centerDyno() {
        if (!section || !dyno) return;
        dyno.style.left = section.clientWidth / 2 - 25 + "px";
        dyno.style.top = section.clientHeight / 2 - 25 + "px";
    }

    // start the game when the dyno is clicked
    function startGame() {
        if (gameStarted) return;
        gameStarted = true;
        gameOver = false;
        score = 0;
        gameSpeed = 6;
        velocity = 0;

        dyno.style.pointerEvents = "auto";
        dyno.style.top = "0px";
        fallThenRun();
    }

    // restart the game when the game is over
    function restartGame() {
        clearInterval(obstacleInterval);
        obstacles.forEach((o) => o.remove());
        obstacles = [];
        jumping = false;
        gameOver = false;
        gameStarted = false;
        score = 0;
        gameSpeed = 6;
        velocity = 0;

        centerDyno();
        dyno.style.pointerEvents = "none";
    }

    // make the dyno fall and then start the game
    function fallThenRun() {
        const fallInterval = setInterval(() => {
            const top = parseInt(dyno.style.top || "0", 10);
            if (top < section.clientHeight - 60) {
                dyno.style.top = top + 4 + "px";
            } else {
                dyno.style.top = section.clientHeight - 60 + "px";
                clearInterval(fallInterval);
                startObstacles();
            }
        }, 16);
    }

    // start generating obstacles
    function startObstacles() {
        obstacleInterval = setInterval(() => {
            const obstacle = document.createElement("div");
            obstacle.textContent = Math.random() > 0.5 ? "🥒" : "🥦";
            obstacle.style.position = "absolute";
            obstacle.style.bottom = "0px";
            obstacle.style.left = section.clientWidth + "px";
            obstacle.style.fontSize = "2rem";
            obstacle.style.userSelect = "none";
            obstacle.dataset.scored = "false";
            section.appendChild(obstacle);
            obstacles.push(obstacle);
        }, 1500);

        requestAnimationFrame(updateGame);
    }

    // jump function
    function jump() {
        if (!gameStarted || gameOver) return;
        if (!jumping) {
            jumping = true;
            velocity = -12;
        }
    }

    // update the game state
    function updateGame() {
        const top = parseInt(dyno.style.top || "0", 10);
        velocity += gravity;
        dyno.style.top =
            Math.min(top + velocity, section.clientHeight - 60) + "px";
        if (top + velocity >= section.clientHeight - 60) {
            jumping = false;
        }

        const dynoLeft = dyno.offsetLeft;

        obstacles.forEach((obs, i) => {
            const left = obs.offsetLeft - gameSpeed;
            obs.style.left = left + "px";

            const obsRight = left + obs.offsetWidth;
            if (obs.dataset.scored === "false" && obsRight < dynoLeft) {
                obs.dataset.scored = "true";
                score++;
                if (score > bestScore) bestScore = score;
                if (score % 2 === 0) gameSpeed += 1;
            }

            if (left < -obs.offsetWidth - 10) {
                obs.remove();
                obstacles.splice(i, 1);
            }

            const dynoRect = dyno.getBoundingClientRect();
            const obsRect = obs.getBoundingClientRect();
            if (
                dynoRect.left < obsRect.left + obsRect.width &&
                dynoRect.left + dynoRect.width > obsRect.left &&
                dynoRect.top < obsRect.top + obsRect.height &&
                dynoRect.height + dynoRect.top > obsRect.top
            ) {
                endGame();
            }
        });

        if (!gameOver) requestAnimationFrame(updateGame);
    }

    // end the game
    function endGame() {
        clearInterval(obstacleInterval);
        gameOver = true;
    }

    onMount(() => {
        // dyno setup
        dyno.style.position = "absolute";
        dyno.style.width = "50px";
        dyno.style.height = "50px";
        dyno.style.objectFit = "contain";
        dyno.style.transition = "top 0.05s linear";
        dyno.style.userSelect = "none";

        // section setup
        section.style.position = "relative";
        section.style.overflow = "hidden";

        // center the dyno
        centerDyno();
        dyno.style.pointerEvents = "none";

        // events
        dyno.addEventListener("click", startGame);
        section.addEventListener("click", jump);
        document.addEventListener("keydown", (e) => {
            if (e.code === "Space") jump();
        });

        window.addEventListener("resize", () => {
            if (!gameStarted && !gameOver) centerDyno();
        });
    });
</script>

<section bind:this={section} class="bg-neutral-900 h-48 relative select-none">
    <!-- Start Overlay -->
    {#if !gameStarted && !gameOver}
        <button
            class="absolute inset-0 flex items-center justify-center"
            on:click={startGame}
            aria-label="Start game"
        >
            <span
                class="w-24 h-24 rounded-full bg-neutral-950 hover:bg-amber-600 transition-colors duration-200"
            ></span>
        </button>
    {/if}

    <!-- Dyno -->
    <img
        bind:this={dyno}
        src="img/egg/toucan-icon.webp"
        alt="Toucan"
        class="cursor-pointer"
    />

    <!-- Score -->
    {#if gameStarted && !gameOver}
        <div class="absolute top-2 right-3 z-10">
            <div
                class="text-white font-mono text-sm px-2 py-1 rounded bg-black/45 backdrop-blur-sm"
            >
                Score: {score} — Best: {bestScore}
            </div>
        </div>
    {/if}

    <!-- Game Over -->
    {#if gameOver}
        <div
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 cursor-pointer text-center px-4"
            on:click={restartGame}
        >
            <div class="text-amber-600 font-bold text-xl">GAME OVER</div>
            <div class="text-white/90 font-mono mt-1">
                Score: {score} — Best: {bestScore}
            </div>
            <div class="text-white/70 text-sm mt-2">
                Clicca qui per ripartire
            </div>
        </div>
    {/if}
</section>
