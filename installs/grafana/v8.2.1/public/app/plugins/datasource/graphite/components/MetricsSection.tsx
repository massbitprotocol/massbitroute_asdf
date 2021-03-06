import React from 'react';
import { GraphiteSegment } from '../types';
import { GraphiteQueryEditorState } from '../state/store';
import { MetricSegment } from './MetricSegment';

type Props = {
  segments: GraphiteSegment[];
  state: GraphiteQueryEditorState;
};

export function MetricsSection({ segments = [], state }: Props) {
  return (
    <>
      {segments.map((segment, index) => {
        return <MetricSegment segment={segment} metricIndex={index} key={index} state={state} />;
      })}
    </>
  );
}
