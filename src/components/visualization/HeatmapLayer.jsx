/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import invariant from "invariant"
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { MAP, HEATMAP_LAYER } from "../../constants"

/**
 * A wrapper around `google.maps.visualization.HeatmapLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
 */
export class HeatmapLayer extends React.PureComponent {
  static propTypes = {}

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
   */
  constructor(props, context) {
    super(props, context)
    invariant(
      google.maps.visualization,
      `Did you include "libraries=visualization" in the URL?`
    )
    const heatmapLayer = new google.maps.visualization.HeatmapLayer()
    construct(HeatmapLayer.propTypes, updaterMap, this.props, heatmapLayer)
    heatmapLayer.setMap(this.context[MAP])
    this.state = {
      [HEATMAP_LAYER]: heatmapLayer,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[HEATMAP_LAYER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[HEATMAP_LAYER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const heatmapLayer = this.state[HEATMAP_LAYER]
    if (heatmapLayer) {
      heatmapLayer.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default HeatmapLayer

const eventMap = {}

const updaterMap = {}
