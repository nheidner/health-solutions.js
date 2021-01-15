---
templateKey: contact_popup
locale: en
path: /contact-popup
header:
  logo_image:
    source: /img/logo_weiß_freistehend.png
    alt: logo
  heading: Ich bin ein Pop Up. Willkommen beim Anmelden.
  markdown_text: Ich bin ein Fließtext und das ist gut so. Was hier stehen soll,
    dass weiß leider noch keiner, aber das ist auch noch lange kein Problem.
form:
  name_field:
    label: NAME
    messages:
      required: Required
      character_maximum: Must be 80 characters or less
    max_number_characters: 80
  telephone_number_field:
    label: TELEFON NUMMER
    messages:
      character_maximum: Must be 80 characters or less
      required: Required
    max_number_characters: 80
  email_address_field:
    label: E-MAIL ADRESSE
    messages:
      is_email: Invalid email address
      required: Required
  send_button:
    button_text: Abschicken
    messages:
      is_sent: Your message was sent
image:
  source: /img/speach-bubbles.png
  alt: speach bubbles
---
