'use strict';

const TVViewingDistance = (() => {
  const sizes = [32, 40, 43, 50, 55, 65, 75, 77, 83, 85, 86, 98, 100];
  const angles = [30, 35, 40];
  const widthFraction = 16 / Math.hypot(16, 9);

  function screenDimensions(inches) {
    if (!Number.isFinite(inches) || inches <= 0) {
      throw new RangeError('Screen diagonal must be a positive number.');
    }
    const diagonal = inches * 2.54;
    return { width: diagonal * widthFraction, height: diagonal * 9 / Math.hypot(16, 9) };
  }

  function recommendations(metres) {
    if (!Number.isFinite(metres) || metres <= 0) {
      throw new RangeError('Viewing distance must be a positive number.');
    }
    return angles.map(angle => {
      const targetWidth = 2 * metres * 100 * Math.tan(angle * Math.PI / 360);
      const targetInches = targetWidth / (2.54 * widthFraction);
      const inches = sizes.reduce((best, size) =>
        Math.abs(size - targetInches) < Math.abs(best - targetInches) ? size : best
      );
      const { width, height } = screenDimensions(inches);
      return {
        angle, targetInches, inches, width, height,
        actualAngle: 2 * Math.atan(width / (200 * metres)) * 180 / Math.PI,
        outsideRange: targetInches < sizes[0] || targetInches > sizes.at(-1),
      };
    });
  }

  return { screenDimensions, recommendations };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = TVViewingDistance;
