function validation(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return 'invalid';
    }
    return 'valid';
}
const valid = '{"name":"John", "age":20, "male":true}';
const invalid = "hello";
console.log(validation(valid));