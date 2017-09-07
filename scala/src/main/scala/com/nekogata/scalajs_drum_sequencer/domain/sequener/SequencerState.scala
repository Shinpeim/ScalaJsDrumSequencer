package com.nekogata.scalajs_drum_sequencer.domain.sequener

class SequencerState(
  val selectedPatternId: PatternId,
  val selectedTrackName: TrackName
) {
  def selectPattern(p: PatternId): SequencerState =
    new SequencerState(p, selectedTrackName)

  def selectTrack(t: TrackName): SequencerState =
    new SequencerState(this.selectedPatternId, t)
}
