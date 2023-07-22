const newsTicker = {
    init() {
        this.cacheDOM();
        this.bindEvents();
        this.news();
        this.ticker();
    },
    cacheDOM() {
        let $el = $(".app");
        this.$newsBox = $el.find(".news-box");
        this.$news = $el.find(".news");
        this.$ticker = (".ticker li p");
    },
    bindEvents() {
        $(window).resize(f => {
            this.news();
            this.ticker();
        });
    },
    news() {
        this.tickerWidth = $(this.$ticker).width();
        this.class="underline"
        this.style = {
            position: "absolute",
            top: "3px",
            right: -(this.tickerWidth),
            left: this.tickerWidth,
            fontSize: "1.5rem",
            whiteSpace: "nowrap",
        };
        this.blockArr = $(this.$ticker).get().map(e => $(e).text());
        this.itemNum = -1;
    },
    ticker() {
        this.itemNum = this.itemNum < this.blockArr.length - 1 ? this.itemNum + 1 : 0;
        $(this.$news).css(this.style);
        $(this.$news).text(this.blockArr[this.itemNum]);
        this.render();
    },
    render() {
        // console.log(($(this.$news).width()),this.$news.width(),$(this.ticker).width()) 
        $(this.$news).animate({
            left: `-${$(this.ticker).width() *2}`
        }, 20000, "linear", this.ticker.bind(this));
    }
}
newsTicker.init();