export default function phoneValidator(phone) {
  const cleanPhone = phone.replace(/\D/g, '');

  if (cleanPhone.length === 11) {
    return cleanPhone.replace(/^\d/, '+7');
  }
  return cleanPhone.replace(/^/, '+');
}
