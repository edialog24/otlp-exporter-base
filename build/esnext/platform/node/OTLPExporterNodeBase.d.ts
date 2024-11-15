import { OTLPExporterBase } from '../../OTLPExporterBase';
import { OTLPExporterNodeConfigBase } from './types';
import { ISerializer } from '@opentelemetry/otlp-transformer';
import { OTLPExporterError } from '../../types';
/**
 * Collector Metric Exporter abstract base class
 */
export declare abstract class OTLPExporterNodeBase<ExportItem, ServiceResponse> extends OTLPExporterBase<OTLPExporterNodeConfigBase, ExportItem> {
    private _serializer;
    private _transport;
    private _timeoutMillis;
    constructor(config: OTLPExporterNodeConfigBase | undefined, serializer: ISerializer<ExportItem[], ServiceResponse>, requiredHeaders: Record<string, string>, signalIdentifier: string, signalResourcePath: string);
    send(objects: ExportItem[], onSuccess: () => void, onError: (error: OTLPExporterError) => void): void;
    onShutdown(): void;
}
//# sourceMappingURL=OTLPExporterNodeBase.d.ts.map