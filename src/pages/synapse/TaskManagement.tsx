
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Circle, Clock, Plus, PlusCircle, Calendar, CheckSquare, MoreHorizontal, Trash2, Edit, Tag, AlertCircle, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

const TaskManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: "Prepare quarterly financial report", 
      description: "Analyze Q1 financial data and prepare a comprehensive report for stakeholders.",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-05-15",
      tags: ["finance", "report"],
      assignedTo: "John Smith"
    },
    { 
      id: 2, 
      title: "Review investment portfolio", 
      description: "Perform a thorough review of current investments and suggest optimizations.",
      status: "todo",
      priority: "medium",
      dueDate: "2025-05-10",
      tags: ["investment", "analysis"],
      assignedTo: "Sarah Johnson"
    },
    { 
      id: 3, 
      title: "Update client risk profiles", 
      description: "Review and update client risk assessment profiles based on recent market changes.",
      status: "completed",
      priority: "medium",
      dueDate: "2025-05-05",
      tags: ["clients", "risk-assessment"],
      assignedTo: "David Lee"
    },
    { 
      id: 4, 
      title: "Research emerging market opportunities", 
      description: "Conduct research on potential investment opportunities in emerging markets.",
      status: "todo",
      priority: "low",
      dueDate: "2025-05-20",
      tags: ["research", "markets"],
      assignedTo: "John Smith"
    },
    { 
      id: 5, 
      title: "Compliance training", 
      description: "Complete mandatory compliance training for financial advisors.",
      status: "completed",
      priority: "high",
      dueDate: "2025-05-03",
      tags: ["compliance", "training"],
      assignedTo: "Sarah Johnson"
    },
    { 
      id: 6, 
      title: "Client portfolio review meeting", 
      description: "Prepare and conduct quarterly portfolio review meeting with key clients.",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-05-12",
      tags: ["client", "meeting", "review"],
      assignedTo: "David Lee"
    }
  ]);
  
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    tags: [],
    assignedTo: "John Smith"
  });
  
  const [editingTask, setEditingTask] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [newTag, setNewTag] = useState("");
  
  const team = [
    { id: 1, name: "John Smith", role: "Financial Analyst" },
    { id: 2, name: "Sarah Johnson", role: "Investment Advisor" },
    { id: 3, name: "David Lee", role: "Risk Manager" },
  ];
  
  const handleAddTask = () => {
    if (!newTask.title) {
      toast.error("Task title is required!");
      return;
    }
    
    const task = {
      id: tasks.length + 1,
      ...newTask
    };
    
    setTasks([...tasks, task]);
    setNewTask({
      title: "",
      description: "",
      status: "todo",
      priority: "medium",
      dueDate: format(new Date(), "yyyy-MM-dd"),
      tags: [],
      assignedTo: "John Smith"
    });
    
    toast.success("Task added successfully!");
  };
  
  const handleUpdateTask = () => {
    if (!editingTask.title) {
      toast.error("Task title is required!");
      return;
    }
    
    const updatedTasks = tasks.map(task => 
      task.id === editingTask.id ? editingTask : task
    );
    
    setTasks(updatedTasks);
    setEditingTask(null);
    toast.success("Task updated successfully!");
  };
  
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    toast.success("Task deleted successfully!");
  };
  
  const handleStatusChange = (id, status) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, status } : task
    );
    
    setTasks(updatedTasks);
    toast.success(`Task moved to ${status === "todo" ? "To Do" : status === "in-progress" ? "In Progress" : "Completed"}`);
  };
  
  const handleAddTag = () => {
    if (!newTag.trim()) return;
    
    if (editingTask) {
      setEditingTask({
        ...editingTask,
        tags: [...editingTask.tags, newTag.trim()]
      });
    } else {
      setNewTask({
        ...newTask,
        tags: [...newTask.tags, newTag.trim()]
      });
    }
    
    setNewTag("");
  };
  
  const handleRemoveTag = (tag) => {
    if (editingTask) {
      setEditingTask({
        ...editingTask,
        tags: editingTask.tags.filter(t => t !== tag)
      });
    } else {
      setNewTask({
        ...newTask,
        tags: newTask.tags.filter(t => t !== tag)
      });
    }
  };
  
  const filteredTasks = tasks.filter(task => {
    const matchesFilter = currentFilter === "all" || task.status === currentFilter;
    const matchesSearch = 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });
  
  const todoTasks = filteredTasks.filter(task => task.status === "todo");
  const inProgressTasks = filteredTasks.filter(task => task.status === "in-progress");
  const completedTasks = filteredTasks.filter(task => task.status === "completed");
  
  const renderPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500 hover:bg-red-600">High</Badge>;
      case "medium":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Medium</Badge>;
      case "low":
        return <Badge className="bg-green-500 hover:bg-green-600">Low</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-4">
          <BackButton />
        </div>
        
        <section className="py-12 bg-gradient-to-b from-blue-500/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-radial from-blue-300/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Task Management</h1>
                <p className="text-muted-foreground">Organize your team's work and track progress effortlessly</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      New Task
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Create New Task</DialogTitle>
                      <DialogDescription>
                        Add details for your new task. Click save when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label htmlFor="title" className="text-sm font-medium">Title</label>
                        <Input 
                          id="title" 
                          placeholder="Task title" 
                          value={newTask.title}
                          onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="description" className="text-sm font-medium">Description</label>
                        <Textarea 
                          id="description" 
                          placeholder="Task description..." 
                          value={newTask.description}
                          onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Priority</label>
                          <Select 
                            value={newTask.priority}
                            onValueChange={(value) => setNewTask({...newTask, priority: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Due Date</label>
                          <Input 
                            type="date" 
                            value={newTask.dueDate}
                            onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Assign To</label>
                        <Select 
                          value={newTask.assignedTo}
                          onValueChange={(value) => setNewTask({...newTask, assignedTo: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select team member" />
                          </SelectTrigger>
                          <SelectContent>
                            {team.map((member) => (
                              <SelectItem key={member.id} value={member.name}>
                                {member.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Tags</label>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Add tag..." 
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddTag();
                              }
                            }}
                          />
                          <Button type="button" variant="outline" onClick={handleAddTag}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {newTask.tags.map((tag, index) => (
                            <Badge 
                              key={index} 
                              variant="secondary"
                              className="flex items-center gap-1"
                            >
                              {tag}
                              <button 
                                onClick={() => handleRemoveTag(tag)}
                                className="ml-1 h-4 w-4 rounded-full hover:bg-muted-foreground/20"
                              >
                                ×
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => {
                          handleAddTask();
                        }}
                      >
                        Create Task
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <div className="relative w-full sm:w-auto">
                  <Input 
                    placeholder="Search tasks..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:min-w-[250px]"
                  />
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="kanban" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="kanban" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col">
                    <div className="bg-muted/40 rounded-t-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <Circle className="h-4 w-4 text-blue-500 mr-2" />
                        <h3 className="font-medium">To Do</h3>
                      </div>
                      <Badge variant="outline" className="text-xs">{todoTasks.length}</Badge>
                    </div>
                    
                    <div className="flex-1 bg-muted/20 rounded-b-lg p-3">
                      <div className="space-y-3">
                        {todoTasks.length > 0 ? (
                          todoTasks.map((task) => (
                            <Card key={task.id} className="hover:shadow-md transition-shadow">
                              <CardHeader className="p-3 pb-0">
                                <div className="flex justify-between">
                                  {renderPriorityBadge(task.priority)}
                                  
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                      <DialogHeader>
                                        <DialogTitle>Task Actions</DialogTitle>
                                      </DialogHeader>
                                      <div className="grid gap-2 py-4">
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start"
                                          onClick={() => {
                                            setEditingTask(task);
                                          }}
                                        >
                                          <Edit className="h-4 w-4 mr-2" />
                                          Edit Task
                                        </Button>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start"
                                          onClick={() => handleStatusChange(task.id, "in-progress")}
                                        >
                                          <Clock className="h-4 w-4 mr-2" />
                                          Move to In Progress
                                        </Button>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start"
                                          onClick={() => handleStatusChange(task.id, "completed")}
                                        >
                                          <CheckSquare className="h-4 w-4 mr-2" />
                                          Mark as Completed
                                        </Button>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start text-red-500 hover:text-red-700"
                                          onClick={() => handleDeleteTask(task.id)}
                                        >
                                          <Trash2 className="h-4 w-4 mr-2" />
                                          Delete Task
                                        </Button>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </div>
                                <CardTitle className="text-base">{task.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="p-3 pt-2">
                                <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {task.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </CardContent>
                              <CardFooter className="p-3 pt-0 flex justify-between items-center">
                                <div className="text-xs text-muted-foreground flex items-center">
                                  <CalendarIcon className="h-3 w-3 mr-1" />
                                  {format(new Date(task.dueDate), "MMM d, yyyy")}
                                </div>
                                <div className="text-xs font-medium">{task.assignedTo}</div>
                              </CardFooter>
                            </Card>
                          ))
                        ) : (
                          <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                            <AlertCircle className="h-10 w-10 mb-2 opacity-20" />
                            <p>No tasks found</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="bg-muted/40 rounded-t-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        <h3 className="font-medium">In Progress</h3>
                      </div>
                      <Badge variant="outline" className="text-xs">{inProgressTasks.length}</Badge>
                    </div>
                    
                    <div className="flex-1 bg-muted/20 rounded-b-lg p-3">
                      <div className="space-y-3">
                        {inProgressTasks.length > 0 ? (
                          inProgressTasks.map((task) => (
                            <Card key={task.id} className="hover:shadow-md transition-shadow">
                              <CardHeader className="p-3 pb-0">
                                <div className="flex justify-between">
                                  {renderPriorityBadge(task.priority)}
                                  
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                      <DialogHeader>
                                        <DialogTitle>Task Actions</DialogTitle>
                                      </DialogHeader>
                                      <div className="grid gap-2 py-4">
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start"
                                          onClick={() => {
                                            setEditingTask(task);
                                          }}
                                        >
                                          <Edit className="h-4 w-4 mr-2" />
                                          Edit Task
                                        </Button>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start"
                                          onClick={() => handleStatusChange(task.id, "todo")}
                                        >
                                          <Circle className="h-4 w-4 mr-2" />
                                          Move to To Do
                                        </Button>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start"
                                          onClick={() => handleStatusChange(task.id, "completed")}
                                        >
                                          <CheckSquare className="h-4 w-4 mr-2" />
                                          Mark as Completed
                                        </Button>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start text-red-500 hover:text-red-700"
                                          onClick={() => handleDeleteTask(task.id)}
                                        >
                                          <Trash2 className="h-4 w-4 mr-2" />
                                          Delete Task
                                        </Button>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </div>
                                <CardTitle className="text-base">{task.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="p-3 pt-2">
                                <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {task.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </CardContent>
                              <CardFooter className="p-3 pt-0 flex justify-between items-center">
                                <div className="text-xs text-muted-foreground flex items-center">
                                  <CalendarIcon className="h-3 w-3 mr-1" />
                                  {format(new Date(task.dueDate), "MMM d, yyyy")}
                                </div>
                                <div className="text-xs font-medium">{task.assignedTo}</div>
                              </CardFooter>
                            </Card>
                          ))
                        ) : (
                          <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                            <AlertCircle className="h-10 w-10 mb-2 opacity-20" />
                            <p>No tasks found</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="bg-muted/40 rounded-t-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <h3 className="font-medium">Completed</h3>
                      </div>
                      <Badge variant="outline" className="text-xs">{completedTasks.length}</Badge>
                    </div>
                    
                    <div className="flex-1 bg-muted/20 rounded-b-lg p-3">
                      <div className="space-y-3">
                        {completedTasks.length > 0 ? (
                          completedTasks.map((task) => (
                            <Card key={task.id} className="hover:shadow-md transition-shadow">
                              <CardHeader className="p-3 pb-0">
                                <div className="flex justify-between">
                                  {renderPriorityBadge(task.priority)}
                                  
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                      <DialogHeader>
                                        <DialogTitle>Task Actions</DialogTitle>
                                      </DialogHeader>
                                      <div className="grid gap-2 py-4">
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start"
                                          onClick={() => {
                                            setEditingTask(task);
                                          }}
                                        >
                                          <Edit className="h-4 w-4 mr-2" />
                                          Edit Task
                                        </Button>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start"
                                          onClick={() => handleStatusChange(task.id, "todo")}
                                        >
                                          <Circle className="h-4 w-4 mr-2" />
                                          Move to To Do
                                        </Button>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start"
                                          onClick={() => handleStatusChange(task.id, "in-progress")}
                                        >
                                          <Clock className="h-4 w-4 mr-2" />
                                          Move to In Progress
                                        </Button>
                                        <Button
                                          variant="outline"
                                          className="w-full justify-start text-red-500 hover:text-red-700"
                                          onClick={() => handleDeleteTask(task.id)}
                                        >
                                          <Trash2 className="h-4 w-4 mr-2" />
                                          Delete Task
                                        </Button>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </div>
                                <CardTitle className="text-base">{task.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="p-3 pt-2">
                                <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {task.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </CardContent>
                              <CardFooter className="p-3 pt-0 flex justify-between items-center">
                                <div className="text-xs text-muted-foreground flex items-center">
                                  <CalendarIcon className="h-3 w-3 mr-1" />
                                  {format(new Date(task.dueDate), "MMM d, yyyy")}
                                </div>
                                <div className="text-xs font-medium">{task.assignedTo}</div>
                              </CardFooter>
                            </Card>
                          ))
                        ) : (
                          <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                            <AlertCircle className="h-10 w-10 mb-2 opacity-20" />
                            <p>No tasks found</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="list" className="mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>All Tasks</CardTitle>
                      <div className="flex gap-2">
                        <Select
                          value={currentFilter}
                          onValueChange={setCurrentFilter}
                        >
                          <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Filter" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Tasks</SelectItem>
                            <SelectItem value="todo">To Do</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {filteredTasks.length > 0 ? (
                      <div className="space-y-2">
                        {filteredTasks.map((task) => (
                          <div 
                            key={task.id}
                            className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg"
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1">
                                {task.status === "completed" ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                                ) : task.status === "in-progress" ? (
                                  <Clock className="h-5 w-5 text-yellow-500" />
                                ) : (
                                  <Circle className="h-5 w-5 text-blue-500" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-medium">{task.title}</h4>
                                <p className="text-sm text-muted-foreground">{task.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {task.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2 min-w-fit">
                              <div className="flex items-center gap-2">
                                {renderPriorityBadge(task.priority)}
                                <div className="text-xs text-muted-foreground">
                                  {format(new Date(task.dueDate), "MMM d, yyyy")}
                                </div>
                              </div>
                              <div className="text-sm font-medium">{task.assignedTo}</div>
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => setEditingTask(task)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-red-500"
                                  onClick={() => handleDeleteTask(task.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                        <AlertCircle className="h-12 w-12 mb-3 opacity-20" />
                        <p className="text-lg mb-1">No tasks found</p>
                        <p className="text-sm">Try adjusting your filters or create a new task.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      {/* Edit Task Dialog */}
      {editingTask && (
        <Dialog open={!!editingTask} onOpenChange={(open) => !open && setEditingTask(null)}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
              <DialogDescription>
                Update task details and click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="edit-title" className="text-sm font-medium">Title</label>
                <Input 
                  id="edit-title" 
                  placeholder="Task title" 
                  value={editingTask.title}
                  onChange={(e) => setEditingTask({...editingTask, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="edit-description" className="text-sm font-medium">Description</label>
                <Textarea 
                  id="edit-description" 
                  placeholder="Task description..." 
                  value={editingTask.description}
                  onChange={(e) => setEditingTask({...editingTask, description: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority</label>
                  <Select 
                    value={editingTask.priority}
                    onValueChange={(value) => setEditingTask({...editingTask, priority: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Due Date</label>
                  <Input 
                    type="date" 
                    value={editingTask.dueDate}
                    onChange={(e) => setEditingTask({...editingTask, dueDate: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select 
                  value={editingTask.status}
                  onValueChange={(value) => setEditingTask({...editingTask, status: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Assign To</label>
                <Select 
                  value={editingTask.assignedTo}
                  onValueChange={(value) => setEditingTask({...editingTask, assignedTo: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select team member" />
                  </SelectTrigger>
                  <SelectContent>
                    {team.map((member) => (
                      <SelectItem key={member.id} value={member.name}>
                        {member.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tags</label>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Add tag..." 
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button type="button" variant="outline" onClick={handleAddTag}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {editingTask.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {tag}
                      <button 
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 h-4 w-4 rounded-full hover:bg-muted-foreground/20"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  handleUpdateTask();
                }}
              >
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      <Footer />
    </div>
  );
};

export default TaskManagement;
