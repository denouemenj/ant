import { useSigma } from "@react-sigma/core";
import { FC, useEffect } from "react";

import { FiltersState } from "../types";


const GraphTitle: FC<{ filters: FiltersState }> = ({ filters }) => {
  const sigma = useSigma();
  const graph = sigma.getGraph();

  useEffect(() => {
    // To ensure the graphology instance has up to data "hidden" values for
    // nodes, we wait for next frame before reindexing. This won't matter in the
    // UX, because of the visible nodes bar width transition.
    requestAnimationFrame(() => {
      const index = { nodes: 0, edges: 0 };
      graph.forEachNode((_, { hidden }) => !hidden && index.nodes++);
      graph.forEachEdge((_, _2, _3, _4, source, target) => !source.hidden && !target.hidden && index.edges++);
    });
  }, [filters]);

  return (
    <div className="graph-title">
      <h1>Actor Network Surrounding In Vitro Fertilization and Commercial Surrogacy at BioTexCom, Ukraine</h1>
    </div>
  );
};

export default GraphTitle;
