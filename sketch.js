const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 560;
const IMG_START_IDX = 1;
const IMG_END_IDX = 4;

let images = [];
let img_idx = 1;
let next_button;
let prev_button;
let undo_button;
let save_button;
let key_points = [];

function preload() {
  for (var i = IMG_START_IDX; i < IMG_END_IDX; i++)
  {
    images[i] = loadImage("./src/cat_" + i + ".jpg");
  }
}

function setup() {
  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.position(10, 105);
  background(255);
  
  prev_button = createButton('Prev');
  prev_button.position(21, 72);
  prev_button.mousePressed(decrease_idx);
  
  next_button = createButton('Next');
  next_button.position(72, 72);
  next_button.mousePressed(increase_idx);
  
  undo_button = createButton('Undo');
  undo_button.position(123, 72);
  undo_button.mousePressed(delete_last_point);

  save_button = createButton('Save');
  save_button.position(180, 72);
}

function delete_last_point()
{
  key_points.pop();
}

function mousePressed() {
  let createNewPoint = true;
  for (let i = 0; i < key_points.length; i++)
  {
    if(key_points[i].hoverPoint(mouseX, mouseY))
    {
      key_points.splice(i, 1);
      createNewPoint = false;
    }
  }
  
  if (createNewPoint && mouseX > 0 && mouseX < CANVAS_WIDTH && mouseY > 0 && mouseY < CANVAS_HEIGHT)
  {
    let point = new Keypoint(mouseX, mouseY, 9);
    key_points.push(point);
  }
}

function keyPressed()
{
  if (keyCode === LEFT_ARROW)
    decrease_idx();
  else if (keyCode === RIGHT_ARROW)
    increase_idx();
}

function decrease_idx()
{
  if (img_idx != IMG_START_IDX)
    img_idx--;
  else
    img_idx = IMG_END_IDX-1;
  
  image(images[img_idx], 0, 0);  
  key_points = [];
}

function increase_idx()
{
  if (img_idx != IMG_END_IDX-1)
    img_idx++;
  else
    img_idx = IMG_START_IDX;
  
  image(images[img_idx], 0, 0);
  key_points = [];
}

function draw()
{
  image(images[img_idx], 0, 0);  

  for (let i = 0; i < key_points.length; i++)
  {
    if(key_points[i].hoverPoint(mouseX, mouseY))
    {
      key_points[i].changeColor(255);
    }
    else
    {
      key_points[i].changeColor(0);
    }
    key_points[i].show();
  }
}
