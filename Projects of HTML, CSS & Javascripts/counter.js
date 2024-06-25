<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bkc.css">
    <title>Counter</title>
</head>
<body>
    <h1>Count</h1>
    <div class="container" id="container">
        <div class="box">
            <button id="myBack">Back</button>
        </div>
        <div class="box">
            <button id="myReset">Reset</button>
        </div>
        <div class="box">
            <button id="myNext">Next</button>
        </div>
    </div>
    <h2 id="timer"></h2> <!-- Display for the timer -->
    <script>
        let timerElement = document.getElementById("timer");
        let timer;
        let timeLeft;

        function getRandomTime(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function startTimer() {
            timeLeft = getRandomTime(10, 60); // Random time between 10 and 60 seconds
            timerElement.innerHTML = timeLeft;

            timer = setInterval(function() {
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    timerElement.innerHTML = "Time's up!";
                } else {
                    timeLeft--;
                    timerElement.innerHTML = timeLeft;
                }
            }, 1000);
        }

        document.getElementById("myBack").addEventListener("click", function() {
            if (timeLeft < 60) {
                timeLeft++;
                timerElement.innerHTML = timeLeft;
            }
        });

        document.getElementById("myReset").addEventListener("click", function() {
            clearInterval(timer);
            startTimer();
        });

        document.getElementById("myNext").addEventListener("click", function() {
            if (timeLeft > 0) {
                timeLeft--;
                timerElement.innerHTML = timeLeft;
            }
        });

        // Start the timer when the page loads
        window.onload = startTimer;
    </script>
</body>
</html>
