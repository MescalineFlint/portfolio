document.addEventListener("DOMContentLoaded", function () {
  const qwizGameIcon = document.querySelectorAll(".qwiz__game-icon");
  const qwizHalf = document.querySelectorAll(".qwiz__half");
  const stepsBlock = document.querySelector(".steps");
  const pointsBlock = document.querySelector(".points-block");
  const ratingBlock = document.querySelector(".rating");

  qwizGameIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      while (
        (icon = icon.parentElement) &&
        !icon.classList.contains("qwiz__half")
      );
      setTimeout(() => {
        pointsBlock.style.display = "none";
        let ratingGameBtnList = document.querySelectorAll(".rating__game-btn");
        console.log('eblet')
        ratingGameBtnList.forEach((btn) => {
          btn.classList.add("show-hide-block");
        }, 5000);
      });
      icon.classList.add("vote");
      // document.querySelector('.vote').addEventListener('animationend',() => {
        let iconBlock = icon.querySelector(".qwiz-content");
        iconBlock.prepend(pointsBlock);
        iconBlock.prepend(stepsBlock);
        iconBlock.append(ratingBlock);
        pointsBlock.style.display = "flex";
        stepsBlock.style.display = "flex";
        ratingBlock.style.display = "flex";
        pointsBlock.classList.add("show-hide-block");
        stepsBlock.classList.add("show-hide-block");
        ratingBlock.classList.add("show-hide-block");
        console.log('blet')
      // })
      qwizHalf.forEach((block) => {
        if (!block.classList.contains("vote")) {
          block.classList.add("hide-game");
          block.querySelector(".qwiz__game-icon").style.display = "none";
          //   icon.querySelector(".qwiz-content__hide").style.opacity = "0";
          icon.querySelector(".qwiz-content__hide").style.display = "none";
          document.querySelector(".qwiz__vs").style.display = "none";
          document.querySelector('.vote').addEventListener('animationend',() => {
            block.style.display = "none";
            
          })
        }
      });
    });
  });
});
