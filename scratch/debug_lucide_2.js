const lucide = require('lucide-react');
console.log('--- Search for Github ---');
Object.keys(lucide).forEach(key => {
  if (key.toLowerCase().includes('git')) {
    console.log(`${key}: ${typeof lucide[key]}`);
  }
});
