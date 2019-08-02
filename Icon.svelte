<script>
  export let data = ''
  export let viewBox = '0 0 20 20'
  
  export let size = '20px'
  export let width = size
  export let height = size

  export let color = 'currentColor'
  export let stroke = color
  export let fill = color

  $: elements = data
    .replace(/<svg ([^>]*)>/, '')
    .replace('</svg>', '')
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={width}
  height={height}
  viewBox={viewBox}
  stroke={stroke}
  fill={fill}
>
  {@html elements}
</svg>
