import { version } from '../../../../../package.json';

if (typeof window !== 'undefined') {
  window.parent?.postMessage(
    {
      type: 'builder.isAngularSdk',
      data: {
        value: true,
        supportsCustomBreakpoints: true,
        priorVersion: version,
        legacy: true,
      },
    },
    '*'
  );
}
