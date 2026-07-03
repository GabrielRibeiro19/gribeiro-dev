"use client";

type AgeProps = {
  birthDate: string;
};

/**
 * Renders the current age computed from an ISO birth date.
 * SSG bakes the build-time value; hydration corrects it, so the
 * age stays right even if the site isn't redeployed for months.
 */
export function Age({ birthDate }: AgeProps) {
  const [year, month, day] = birthDate.split("-").map(Number);
  const now = new Date();
  let age = now.getFullYear() - year;
  const beforeBirthday =
    now.getMonth() + 1 < month ||
    (now.getMonth() + 1 === month && now.getDate() < day);
  if (beforeBirthday) {
    age -= 1;
  }

  return <span suppressHydrationWarning>{age}</span>;
}
