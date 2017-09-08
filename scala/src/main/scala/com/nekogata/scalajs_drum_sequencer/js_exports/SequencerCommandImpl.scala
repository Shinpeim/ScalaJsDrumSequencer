package com.nekogata.scalajs_drum_sequencer.js_exports

import com.nekogata.scalajs_drum_sequencer.command.SequencerCommand
import com.nekogata.scalajs_drum_sequencer.domain.player.PlayerStateRepository
import com.nekogata.scalajs_drum_sequencer.domain.sequener.{SequencerStateRepository, TrackRepository}
import com.nekogata.scalajs_drum_sequencer.infrastructure.{PlayerStateRepositoryImpl, SequencerStateRepositoryImpl, TrackRepositoryImpl}

import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}


@JSExportTopLevel("SequencerCommand")
class SequencerCommandImpl extends SequencerCommand{
  override val sequencerStateRepository: SequencerStateRepository = new SequencerStateRepositoryImpl
  override val playerStateRepository: PlayerStateRepository = new PlayerStateRepositoryImpl
  override val trackRepository: TrackRepository = new TrackRepositoryImpl

  @JSExport
  override def selectTrack(name: String): Unit = super.selectTrack(name)

  @JSExport
  override def toggleNote(index: Int): Unit = super.toggleNote(index)
}
