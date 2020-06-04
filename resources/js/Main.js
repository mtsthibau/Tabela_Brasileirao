function onLoadPage() {
    main = new Main();
    main.load();
}


class Main {

    constructor(brasileirao) {
        this.brasileirao = brasileirao;
    }

    load() {
        var apis = new Apis();

        apis.loadData();
    }

}