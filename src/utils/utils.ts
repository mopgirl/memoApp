export default class Utils {
  static dateString(createdOn: {
    toDate: () => { toISOString: () => string };
  }): string {
    const str: string = createdOn.toDate().toISOString();
    return str.split('T')[0];
  }
}
