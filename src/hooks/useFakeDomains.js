import { fakeDomains } from '@/fake/fake.js';

export const useFakeDomains = (name) => {
  return fakeDomains.map((domain) => {
    return { ...domain, root: name.replace(/\s+/g, '') };
  });
};
