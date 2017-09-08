package com.nekogata.scalajs_drum_sequencer.domain.sequener

class SequencerState(
  val selectedTrackName: TrackName
) {
  def selectTrack(t: TrackName): SequencerState =
    new SequencerState(t)
}
