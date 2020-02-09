export default function validate(values) {
    let errors = {};
    if (!values.hr) {
        errors.hr = 'Hour is required';
    }

    if (!values.mm) {
        errors.mm = 'Minute is required';
    }

    if (!values.time) {
        errors.ss = 'Time is required';
    }

    if (!values.day) {
        errors.day = 'Day is required';
    }

    if (!values.sound) {
        errors.sound = 'Sound is required';
    }
  
    if (!values.label) {
        errors.label = 'Label is required';
    }

    return errors;
}