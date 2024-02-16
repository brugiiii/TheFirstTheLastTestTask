import gsap from "gsap";

export const handleMouseMove = (event, selector, cf = 0.01) => {
    const text = document.querySelector(selector);
    const centerX = text.offsetLeft + text.offsetWidth / 2;
    const centerY = text.offsetTop + text.offsetHeight / 2;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const shiftX = deltaX * cf;
    const shiftY = deltaY * cf;
    gsap.to(text, { x: shiftX, y: shiftY, duration: 0.3 });
}