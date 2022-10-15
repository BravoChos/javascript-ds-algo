from queue import Queue

def number_of_islands(grid: List[List[str]]) -> int:
    if not grid:
        return 0
    directions: Tuple[Tuple[int, int], ...] = (
        (-1, 0),  # up
        (0, 1),  # right
        (1, 0),  # down
        (0, -1)  # left
    )
    row_limit: int = len(grid)
    col_limit: int = len(grid[0])
    count: int = 0
    for row in range(row_limit):
        for col in range(col_limit):
            if grid[row][col] == '1':
                count += 1
                grid[row][col] = '0'  # set it to '0', to mark it as visited
                # start breadth first search
                queue: Queue[Tuple[int, int]] = Queue()
                queue.put((row, col))
                while not queue.empty():
                    row_from_queue, col_from_queue = queue.get()
                    for delta_row, delta_col in directions:
                        neighbour_row: int = row_from_queue + delta_row
                        neighbour_col: int = col_from_queue + delta_col
                        if (
                            0 <= neighbour_row < row_limit  # inside rows
                            and 0 <= neighbour_col < col_limit  # inside cols
                            and grid[neighbour_row][neighbour_col] == '1'
                        ):
                            queue.put((neighbour_row, neighbour_col))
                            # mark element as visited
                            grid[neighbour_row][neighbour_col] = '0'
                # end bfs
    return count