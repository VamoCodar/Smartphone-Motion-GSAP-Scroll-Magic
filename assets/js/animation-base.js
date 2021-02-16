 //plugin gradiente ======================
 gsap.registerPlugin({
    name: "gradient",
    init(target, value) {
        let forceDeg = value => ~value.indexOf("deg") ? value : (value = value.split("(")) && value.shift() + "(180deg, " + value.join("(");
        this.add(target.style, "backgroundImage", forceDeg(window.getComputedStyle(target).backgroundImage + ""), forceDeg(value));
    }
});