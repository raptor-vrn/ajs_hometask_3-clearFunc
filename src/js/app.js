export default function getHealty(obj) {
  const num = obj.health;

  if (num > 50) {
    return 'healthy';
  }

  if (num >= 15 && num <= 50) {
    return 'wounded';
  }

  return 'critical';
}

getHealty({ name: 'Маг', health: 90 });
