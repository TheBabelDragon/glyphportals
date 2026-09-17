# GlyphPortals

A walkable raycaster whose walls are made entirely of Hebrew letters — no textures, no shaders, just glyphs and distance — with **seamless portal-style non-Euclidean geometry** (the approach shown in CodeParade’s Non-Euclidean Worlds Engine).

Classic red/cyan anaglyph 3D. Grab a pair of glasses if you have them, or just enjoy the retro double-image.

Live (after Pages is enabled): https://thebabeldragon.github.io/glyphportals/

Or open `index.html` locally. Press any key or tap to start.

## Controls

| Input | Action |
| --- | --- |
| `W A S D` | Walk / strafe |
| `←` `→` | Turn |
| `M` | Toggle minimap |
| `V` | Toggle anaglyph / mono |
| Walk into a portal face | Teleport to the linked portal (orientation preserved) |

Touchscreens get on-screen pads plus **MAP** and **3D** buttons.

## What it is

- DDA raycaster over a small corridor map
- Wall, ceiling, and floor drawn from the 22-letter aleph-bet (no finals)
- Distance-scaled red/cyan disparity for anaglyph depth
- Title-screen Hebrew matrix rain
- **Portals**: when a ray hits a portal cell it continues in the linked space with a rigid transform (position + heading). The player does the same on contact. This is the same fundamental trick as CodeParade’s engine and the game *Portal* — seams disappear, spaces can be larger on the inside, loops and size changes become possible.

Single file. No build step.

## Non-Euclidean notes (from the CodeParade video)

The video demonstrates:
- Long exterior tunnels that are short on the inside (and vice-versa)
- Recursive views through multiple portals with no visible seams
- Objects that grow or shrink by walking “the other way” around a portal loop
- Utility for VR (packing large virtual spaces into a small physical room)

This repo carries the *portal continuation* idea into a pure 2-D canvas glyph raycaster. Scaling and full recursive stencil buffering are left as future work; the core ray + player teleport is present and playable.

## Origin

Reformed from the private `asskey-engine` prototype. Name cleaned up; portal geometry added.
