export default class Task {

    constructor (title, description, date, priority, categories, id, isCompleted) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.categories = categories;
        this.id = id;
        this.isCompleted = false;
    }
}

