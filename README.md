# Firewatch-Maps

_Firewatch-Maps_ is a Javascript (Leaflet) mapping application displaying the aligned in-game maps from [_Firewatch_](http://www.firewatchgame.com/).

![firewatch-reddit30](https://github.com/user-attachments/assets/cbf841b2-487d-43cc-bb8a-9fd809f830ae)

## Sources

- The in-game **textures** of the maps were retrieved with [Perfare](https://www.perfare.net/)’s [AssetStudio](https://github.com/Perfare/AssetStudio) and converted to .webp.
- **Alignment** was done in Photoshop, with the smallest map ("map_cache_wirehike" in cache box 302) as the base (1:1 pixels), and the other maps scaled and translated around that.
- Map **origin** (0,0) is the center of the marker for "Two Forks Lookout". Note that Leaflet.js doesn’t use x and y coordinates as such, but [Northing and Easting](https://leafletjs.com/examples/crs-simple/crs-simple.html) (-y, x).


## Contributing

### Bugs

Here on GitHub Pages, a scale bar is shown which I thought I had switched off … Since all the maps use a few scale bar graphics over and over _but at different scales_, the maps themselves don’t provide any reference. (I’m planning to look into the terrain meshes to figure out a "real" scale …)

### To Do

Henry’s annotations are present as .pngs, but not aligned to the map (yet). Same for the accompanying keys.
I was planning to either 
- try with [RenderDoc](https://renderdoc.org/) to grab the map texture with annotations before it was put on the map mesh,
or
- photo-stitch a couple of screenshots to an annotated map,
- warp the result to the original main map,
- align the marker icons and path lines etc. to that,
- probably export a single .webp as overlay, and
- add that overlay to the map.

## Credits

| Work | Name |
| ---- | ---- |
| Visual Direction, 2D Art | [Olly Moss](https://ollymoss.com/) |
| Creative Director | [Sean Vanaman](https://www.seanvanaman.com/) |
| UI Design | [Jake Rodkin](https://rodkin.online/) |
| World Design | [Jane Ng](https://janeng.com/) |

[Original-size game map available on Campo Santos’ blog](https://blog.camposanto.com/post/140041752129/downloadable-printable-firewatch-maps-for-you-a).

[Leaflet](https://leafletjs.com/) originally by [Volodymyr Agafonkin](https://agafonkin.com/) and developed by [many contributors](https://github.com/Leaflet/Leaflet/graphs/contributors).
