function drawConnections() {
  const container = document.querySelector(".steps__list");
  const steps = [...document.querySelectorAll(".step")];
  const svg = document.querySelector(".steps__lines");

  svg.innerHTML = "";

  steps.forEach((step, i) => {
    if (i === steps.length - 1) return;

    const rect1 = step.getBoundingClientRect();
    const rect2 = steps[i + 1].getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    let x1, y1, dir;
    if (step.classList.contains("left")) {
      x1 = rect1.right - containerRect.left;
      y1 = rect1.top + rect1.height / 2 - containerRect.top;
      dir = "right";
    } else {
      x1 = rect1.left - containerRect.left;
      y1 = rect1.top + rect1.height / 2 - containerRect.top;
      dir = "left";
    }

    const x2 = rect2.left + rect2.width / 2 - containerRect.left;
    const y2 = rect2.top - containerRect.top;

    const r = 30;

    let pathData = `M ${x1},${y1}`;

    if (dir === "right") {
      pathData += ` L ${x2 - r},${y1}`;
      pathData += ` A ${r} ${r} 0 0 1 ${x2},${y1 + r}`;
    } else {
      pathData += ` L ${x2 + r},${y1}`;
      pathData += ` A ${r} ${r} 0 0 0 ${x2},${y1 + r}`;
    }

    pathData += ` L ${x2},${y2}`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    svg.appendChild(path);
  });
}

window.addEventListener("load", drawConnections);
window.addEventListener("resize", drawConnections);
