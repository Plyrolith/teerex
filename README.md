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

```go
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

```go
{{< button "files/iframe.html" "Click this button!" "play" >}}
```

### `gallery`
Create a gallery from images given with `image` shortcodes.
Parameters:
- columns (optional, keep empty to use full width and responsive column count)

```go
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

```go
{{< grid "Portfolio" >}}
```

### `image`
Display a single image and make it available for *GLightbox*.
Parameters:
- href, absolute or relative to current page
- title (optional)

```go
{{< image "images/still.jpg" "Cool video frame" >}}
```

### `video`
Open given file in an HTML5 video player with controls.
Parameters:
- href, absolute or relative to current page
- title (optional)

```go
{{< video "files/myvideo.mp4" "My Video" >}}
```

### `video-loop`
Same as `video`, but using *autoplay*, *muted* and without *controls*. Resembles the legacy use of GIFs.

```go
{{< video-loop "files/myloop.mp4" "Converted GIF" >}}
```

### `youtube`
Replacement of the built-in shortcode to fit the theme better; same funtionality.
Parameters:
- video ID

```go
{{< youtube xzyxzyxzyxy >}}
```