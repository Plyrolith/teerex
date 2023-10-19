# Teerex - A Hugo Theme for Media Portfolios
## Installation
Clone the theme into your project.
```bash
git clone https://github.com/plyrolith/teerex themes/teerex
```
Setup your site configuration to use the theme:
```toml
theme = ["teerex"]
```

## Config Parameters
Use these parameters to customize the theme.
- `copyright`

  Default site parameter; will be displayed on the footer.

## Post Parameters
Additional parameters that can be set per page.
- `cover`

  Image displayed in post lists or grids.
  Set the path absolute or relative to current page.
- `herocover`

  Image displayed at the top of the page.
  Set the path absolute or relative to current page.

## Shortcodes
### `audio`
Use the HTML5 audio player to open given file.
Parameters:
- file, absolute or relative to current page

```
{{< audio "files/audio.mp3" >}}
```

### `button` / `button-blank` / `button-lightbox`
Display given link as a button.
Use variations to open it in a new tab or in *GLightbox*.
Parameters:
- href, absolute or relative to current page
- text (optional)
- icon name (optional)
    - play
    - download
    - file
    - pdf

```
{{< button "files/iframe.html" "Click this button!" "play" >}}
```

### `gallery`
Create a gallery from images given with `image` shortcodes.
Parameters:
- columns (optional, keep empty to use full width and responsive column count)

```
{{< gallery 3 >}}
{{< image "images/image1.jpg" >}}
{{< image "images/image2.jpg" >}}
{{< image "images/image3.jpg" >}}
{{< /gallery >}}
```

### `grid`
Display filtered posts in a cover image grid using the full page width.
Parameters:
- tags for filtering posts

```
{{< grid "Portfolio" >}}
```

### `image`
Display a single image and make it available for *GLightbox*.
Parameters:
- href, absolute or relative to current page

```
{{< image "images/still.jpg" >}}
```

### `video`
Open given file in an HTML5 video player with controls.
Parameters:
- href, absolute or relative to current page

```
{{< video "files/myvideo.mp4" >}}
```

### `video-loop`
Same as `video`, but using *autoplay*, *muted* and without *controls*. Resembles the legacy use of GIFs.

```
{{< video-loop "files/myloop.mp4" >}}
```

### `youtube`
Replacement of the built-in shortcode to fit the theme better; same funtionality.
Parameters:
- video ID

```
{{< youtube xzyxzyxzyxy >}}
```