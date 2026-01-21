export const generateIdentitySentence = (skills = []) => {
  const primarySkills = skills.filter(
    (skill) => skill.isPrimaryRole === true
  );

  if (primarySkills.length === 0) {
    return "The developer's primary role is not specified."
  }

  const roles = primarySkills.map((skill) => skill.name);
  const uniqueRoles = [...new Set(roles)];

  const roleText =
    uniqueRoles.length === 1 ? uniqueRoles[0]
      : uniqueRoles.slice(0, -1).join(" ,") +
      "and" +
      uniqueRoles.slice(-1);

  return `Tanishka is a ${roleText} Developer`;

}