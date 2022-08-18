#!/usr/bin/env node

require('esbuild').buildSync({
  entryPoints: ['bug-report-button.js'],
  minify: true,
  sourcemap: true,
  outfile: 'dist/bug-report-button.js',
});
