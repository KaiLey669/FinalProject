export default function img(parent) {
    const node = document.createElement('img');
    node.src = 'https://kartinkin.net/uploads/posts/2019-08/1566257015_art-ciri-140.jpg';
    node.width = 650;
    node.height = 900;
    parent.append(node);
}