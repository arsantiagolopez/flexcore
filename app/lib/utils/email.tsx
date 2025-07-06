export function isValidEmailDomain(email: string) {
  const testDomains = [
    "test.com",
    "example.com",
    "test.test",
    "fake.com",
    "invalid.com",
    "domain.com",
    "email.com",
    "sample.com",
  ];

  const domain = email.split("@")[1]?.toLowerCase();
  return domain && !testDomains.includes(domain);
}
