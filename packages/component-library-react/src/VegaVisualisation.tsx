import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { Vega } from 'react-vega';
import { VegaProps } from 'react-vega/lib/Vega';

export interface VegaVisualisationProps extends VegaProps {}

export const VegaVisualisation = ({ className, ...restProps }: PropsWithChildren<VegaVisualisationProps>) => (
  <Vega {...restProps} className={clsx('utrecht-vega-visualisation', className)} />
);

VegaVisualisation.displayName = 'VegaVisualisation';
