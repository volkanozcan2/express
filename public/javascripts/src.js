String.prototype.random = function(n = 10) {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    returnSting = "";
    for (let i = 0; i < n; i++) {
        returnSting += chars[~~(Math.random() * chars.length)];
    }
    return returnSting;
};
String.prototype.replaceAt = function() {
    let offset = ~~(Math.random() * this.length);
    return this.substr(0, offset) + this.random(1) + this.substr(offset + 1);
}
/*timer = setInterval(() => {
    let s = $(".header").text();
    $(".header").text(s.replaceAt());
}, 10);*/