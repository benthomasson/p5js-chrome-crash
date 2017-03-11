
var from_right = 20
var target_frame_rate = 60
var num_lines = 1000000
var current_num_lines = 10
var lines = [[0,0, 100,100]]

function setup () {
    frameRate(target_frame_rate)
    createCanvas(windowWidth, windowHeight)
    var i = 0
    for (i = 0; i < num_lines; i++) {
        lines.push([Math.random()*windowWidth,
                    Math.random()*windowHeight,
                    Math.random()*windowWidth,
                    Math.random()*windowHeight])
    }

}

function draw () {
    background(255)
    fill(255)
    var i = 0
    stroke(0)
    fill(0)
    for (i = 0; i < current_num_lines; i++) {
        x1 = lines[i][0]
        y1 = lines[i][1]
        x2 = lines[i][2]
        y2 = lines[i][3]
        line(x1, y1, x2, y2)
    }
    noStroke()
    fill('red')
    var current_frame_rate = frameRate()
    var fps_string = 'fps: ' + current_frame_rate.toFixed(2)
    text(fps_string, width - (from_right * textSize()), textSize())
    var delta_string = 'delta: ' + (target_frame_rate - current_frame_rate).toFixed(2)
    text(delta_string, width - (from_right * textSize()), 2 * textSize())
    var n_string = 'n: ' + current_num_lines
    text(n_string, width - (from_right * textSize()), 3 * textSize())
}

function windowResized () {
    resizeCanvas(windowWidth, windowHeight)
}

function mouseWheel (event) {
    var delta = (event.delta)
    current_num_lines = Math.max(1, Math.floor(current_num_lines - delta))
}
