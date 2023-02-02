<script lang="ts">
  import Icon from '$lib/Icon.svelte';

  import menu from '$lib/img/zondicons/menu.svg?raw'
  import airplane from '$lib/img/zondicons/airplane.svg?raw'
  import home from '$lib/img/zondicons/home.svg?raw'

  let icons: { [key: string]: string } = { menu, home, airplane }
  let items = [
    { icon: 'menu' },
    { icon: 'menu', props: { size: '80px' } },
    { icon: 'menu', props: { color: 'red' } },
    { icon: 'menu', class: 'orange' },
    { icon: 'airplane', props: { viewBox: '-2 -2 24 24', size: '60px', fill: 'blue', stroke: 'black' } },
    { icon: 'home', props: { width: '30px', height: '50px' } },
  ]
  const printProps = (props: any) => Object.keys(props || {}).map(key => `${key}="${props[key]}"`).join(' ')
</script>

<style>
  .title { text-align: center; }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item {
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 700px;
    align-items: center;
    height: 100%;
    padding: 8px;
    margin: 4px;
    border: 1px solid gray;
    border-width: 8px;
  }
  .icon {
    flex-shrink: 0;
    margin-right: 16px;
  }
  .code {
    text-align: right;
  }

  .orange {
    color: orange;
  }
</style>

<h1 class="title"> Svelte Icon Examples </h1>

<div class="container">
  {#each items as item}
    <div class="item {item.class}">
      <div class="icon">
        <Icon data={icons[item.icon]} {...item.props} />
      </div>
      <code class="code">
        {`<Icon data={${item.icon}} ${printProps(item.props)} />`}
      </code>
    </div>
  {/each}
</div>
