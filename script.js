const App = () => {
  React.useEffect(() => {
    let sections = document.querySelectorAll(".section"),
    images = document.querySelectorAll(".background"),
    headings = document.querySelectorAll(".section-title"),
    outerWrappers = document.querySelectorAll(".wrapper-outer"),
    innerWrappers = document.querySelectorAll(".wrapper-inner"),
    currentIndex = -1,
    wrap = (index, max) => (index + max) % max,
    animating;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index, sections.length);
      animating = true;

      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;
      let tl = gsap.timeline({ defaults: { duration: 1.25, ease: "power1.inOut" }, onComplete: () => animating = false });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).
        set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([outerWrappers[index], innerWrappers[index]], { yPercent: i => i ? -100 * dFactor : 100 * dFactor }, { yPercent: 0 }, 0).
      fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0).
      fromTo(headings[index], { autoAlpha: 0, yPercent: 150 * dFactor }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2",
        stagger: { each: 0.02, from: "random" } },
      0.2);

      currentIndex = index;
    }

    function navigateSectionById(id) {
      let index = Array.from(sections).findIndex(section => section.id === id);

      if (index !== -1 && index !== currentIndex) {
        gotoSection(index, index > currentIndex ? 1 : -1);
      }
    }

    let lastTap = 0;
    document.addEventListener("touchend", function (event) {
      let currentTime = new Date().getTime();
      let tapLength = currentTime - lastTap;
      if (tapLength < 500 && tapLength > 0) {
        gotoSection(currentIndex + 1, 1);
        event.preventDefault();
      }
      lastTap = currentTime;
    });

    window.addEventListener("wheel", event => {
      if (event.deltaY < 0 && !animating) {
        gotoSection(currentIndex - 1, -1);
      } else if (event.deltaY > 0 && !animating) {
        gotoSection(currentIndex + 1, 1);
      }
    });

    document.querySelectorAll("nav a").forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        navigateSectionById(e.currentTarget.getAttribute("href").slice(1));
      });
    });

    gotoSection(0, 1);
  }, []);

  return /*#__PURE__*/(
    React.createElement("div", { className: "app-container" }, /*#__PURE__*/
    React.createElement("header", { className: "header" }, /*#__PURE__*/
    React.createElement("nav", null, /*#__PURE__*/
    React.createElement("a", { href: "#first" }, "1 "), /*#__PURE__*/
    React.createElement("a", { href: "#second" }, "2 "), /*#__PURE__*/
    React.createElement("a", { href: "#third" }, "3 "), /*#__PURE__*/
    React.createElement("a", { href: "#fourth" }, "4 "), /*#__PURE__*/
    React.createElement("a", { href: "fifth" }, "5 "))), /*#__PURE__*/
    
    React.createElement(Section, { id: "first", title: "Andrew Smith", className: "first", bgUrl: "https://mlangeleno.com/get/files/image/galleries/best-sunsets-los-angeles.jpg" }), /*#__PURE__*/
    React.createElement(Section, { id: "second", title: "Experience in Front-End Coding", className: "second", bgUrl: "https://i.ibb.co/4f8C5ZT/hero.png" }), /*#__PURE__*/
    React.createElement(Section, { id: "third", title: "Back-End Coding", className: "third", bgUrl: "https://i.ibb.co/YTyKwvG/Screenshot-2023-11-06-150713-1.png" }), /*#__PURE__*/
    React.createElement(Section, { id: "fourth", title: " and Linux systems", className: "fourth", bgUrl: "https://i.ibb.co/PznCkRM/banner-2021-2-release-1.jpg" }), /*#__PURE__*/
    React.createElement(Section, { id: "fifth", title: "Contact", className: "fifth", bgUrl: "https://cdn.shopify.com/s/files/1/1623/9935/files/AdobeStock_206937573_1_1024x1024.jpg?v=1651604195" })));


};
const Section = ({ id, title, className, bgUrl }) => {
  return /*#__PURE__*/(
    React.createElement("section", { id: id, className: `section ${className}` }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper-outer" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper-inner" }, /*#__PURE__*/
    React.createElement("div", { className: "background", style: { backgroundImage: `url(${bgUrl})` } }, /*#__PURE__*/
    React.createElement("h2", { className: "section-title" }, title))))));





};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));