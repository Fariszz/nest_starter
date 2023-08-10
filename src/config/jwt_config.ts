export const jwt_config = {
  secret: process.env.JWT_SECRET || 'secret',
  expired: process.env.JWT_EXPIRED || '3600',
};
