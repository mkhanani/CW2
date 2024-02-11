// Sorting.js

class UpdateSorting {
    constructor() {
        // Initialize default values for sortCriteria and sortOrder
        this.sortCriteria = 'Name', 'Price', 'Location', 'Spaces';
        this.sortOrder = 'Ascending','Descending';
    }

    update(criteria, order) {
        // Update sortCriteria and sortOrder based on the provided values
        if (this.sortCriteria === criteria) {
            this.sortOrder = order;
        } else {
            this.sortCriteria = criteria;
            this.sortOrder = order;
        }
    }
}