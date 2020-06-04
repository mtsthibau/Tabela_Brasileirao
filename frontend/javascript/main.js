function onLoadPage() {
    main = new Main();
}


class Main {

    constructor(brasileirao) {
        this.brasileirao = brasileirao;
    }

    main() {
        var apis = new Apis();

        apis.loadData();
    }

}