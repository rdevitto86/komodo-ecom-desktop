import { BaseLog } from '../types.';

export type MetricsLog = BaseLog & {
  type: 'metrics';
  metricName: string;
  metricType: 'counter' | 'gauge' | 'histogram' | 'timer' | 'distribution';
  value: number;
  unit?: string;
  dimensions?: Record<string, string>;
  aggregation?: {
    count?: number;
    sum?: number;
    min?: number;
    max?: number;
    avg?: number;
    percentiles?: Record<string, number>;
  };
}
