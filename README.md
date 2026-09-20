# Course Registration Form (Front-End Only)

A standards-compliant, accessible course registration form built with vanilla HTML, CSS, and JavaScript. This project focuses on client-side validation, proper semantic markup, and clean separation of concerns (structure, presentation, and behavior).

> **Note:** This is a front-end only implementation. There is no backend server or database attached. The form uses a placeholder `action="#"` and prevents default submission via JavaScript so the page does not reload when submitted.

---

## Features

- **Semantic HTML5:** Uses appropriate input types, `<label>` elements tied to inputs via `for`/`id`, and `required` attributes.
- **Custom Client-Side Validation:** Disables default browser validation (`novalidate`) to display custom, user-friendly error messages.
- **Real-Time Feedback:** Error messages appear below the relevant field, and the input border turns red when validation fails.
- **Accessible:** Labels are explicitly linked to inputs, and error messages are presented clearly.
- **Responsive Design:** The form is centered and scales cleanly on different screen sizes.
- **Separation of Concerns:** HTML, CSS, and JavaScript are kept in separate files for maintainability.

---

## File Structure
