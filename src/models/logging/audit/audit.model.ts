import { BaseLog } from '../logging-base';

export interface AuditLog extends BaseLog {
  type: 'audit';
  eventType: 'authentication' | 'authorization' | 'data_access' | 'configuration' | 'security';
  eventName: string;
  actor: {
    userId?: string;
    email?: string;
    role?: string;
    ip?: string;
    userAgent?: string;
  };
  target: {
    resourceType: string;
    resourceId: string;
    resourceName?: string;
  };
  action: string;
  outcome: 'success' | 'failure' | 'denied';
  risk?: 'low' | 'medium' | 'high' | 'critical';
  details?: Record<string, any>;
}
