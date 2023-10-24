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
{{< audio "audio/audio.mp3" >}}
```

### `button` / `button-blank` / `button-lightbox`
Display given link as a button.
Use variations to open it in a new tab or in *fslightbox*.
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
{{< image "img/image1.jpg" >}}
{{< image "img/image2.jpg" >}}
{{< image "img/image3.jpg" >}}
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
Display a single image and make it available for *fslightbox*.
Parameters:
- href, absolute or relative to current page

```
{{< image "img/still.jpg" >}}
```

### `video`
Open given file in an HTML5 video player with controls.
Parameters:
- href, absolute or relative to current page

```
{{< video "video/myvideo.mp4" >}}
```

### `video-loop`
Same as `video`, but using *autoplay*, *muted* and without *controls*. Resembles the legacy use of GIFs.

```
{{< video-loop "video/myloop.mp4" >}}
```

### `youtube`
Replacement of the built-in shortcode to fit the theme better; same funtionality.
Parameters:
- video ID

### `table` | `th` | `tr`
Easy table creation with automated styling. Nested `th` shortcode will be displayed as header, nested `tr` shortcodes will be displayed as rows.

```
{{< table >}}
{{< th Fruit Price Amount >}}
{{< tr Apple "1$" 7 >}}
{{< tr Pear "2$" 2 >}}
{{< /table >}}
```