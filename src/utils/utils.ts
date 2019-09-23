export default class Utils {

    static dateString(createdOn): string {
        const str = createdOn.toDate().toISOString();
        return str.split('T')[0];
    }
}

